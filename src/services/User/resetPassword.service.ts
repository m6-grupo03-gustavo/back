import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors/app.error"

export const resetUserPasswordService = async (resetToken: string, newPassword:string): Promise<void> => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where:{
            reset_token: resetToken
        }
    })

    if (!findUser) {
        throw new AppError("User not found or token already expired.", 404)
    }
    const passwordMatch = await compare(newPassword, findUser.password);
    
    if(passwordMatch){
        throw new AppError("Your new password must be different from the first one.", 403)
    }
    
    findUser.reset_token = null as any

    const addNewPassword = userRepository.create({
        ...findUser,
        password: newPassword,
    })

    await userRepository.save(addNewPassword)
}
