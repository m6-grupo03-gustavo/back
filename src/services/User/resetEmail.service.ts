import { randomUUID } from "crypto"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors/app.error"
import { emailService } from "../../utils/sendEmail.utils"
import { addMinutes } from "date-fns"

export const resetPasswordService = async (email: string) =>{
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({email: email})

    if(!findUser){
        throw new AppError("There is no user registered with this email", 404)
    }

    const expirationDate = addMinutes(new Date(), 5)
    const resetToken = randomUUID()

    const ResetUserPassword = {
        ...findUser,
        reset_token: resetToken,
        reset_token_expiration: expirationDate
    }

    const createReset = userRepository.create(ResetUserPassword)
    await userRepository.save(createReset)

    const restPaswordTemplate = emailService.resetPasswordTemplate(findUser.email, findUser.name, resetToken)

    await emailService.sendEmail(restPaswordTemplate)
}

