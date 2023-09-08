"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const typeorm_1 = require("typeorm");
const user_entitie_1 = require("./user.entitie");
const car_image_entitie_1 = require("./car_image.entitie");
const car_user_comment_entities_1 = require("./car_user_comment.entities");
let Car = exports.Car = class Car {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Car.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Car.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Car.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Car.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Car.prototype, "km", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Car.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Car.prototype, "fuel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Car.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Car.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Car.prototype, "is_published", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => car_image_entitie_1.CarImages, (carImages) => carImages.car, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Car.prototype, "carImages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => car_user_comment_entities_1.CarUserComments, (carUserComments) => carUserComments.car),
    __metadata("design:type", Array)
], Car.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entitie_1.User, (user) => user.cars, { onDelete: "CASCADE" }),
    __metadata("design:type", user_entitie_1.User)
], Car.prototype, "user", void 0);
exports.Car = Car = __decorate([
    (0, typeorm_1.Entity)("cars")
], Car);
