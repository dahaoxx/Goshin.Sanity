import blockContent from './blockContent'
import event from "./event";
import level from "./Admin/level";
import accessRole from "./Admin/accessRole";
import video from "./video";
import _class from "./Class/_class";
import classInstance from "./Class/classInstance";
import schedule from "./Class/schedule";
import product from "./Product/product";
import semesterFee from "./Product/semesterFee";
import productCategory from "./Product/productCategory";
import videoModule from "./videoModule";

export const schemaTypes = [
    event,
    level,
    accessRole,
    video,
    videoModule,
    _class,
    classInstance,
    schedule,
    product,
    productCategory,
    semesterFee,
    blockContent
]