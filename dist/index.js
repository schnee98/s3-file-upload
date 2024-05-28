"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const albumBucketName = process.env.REACT_APP_BUCKET_NAME || "";
const region = process.env.REACT_APP_REGION || "";
const accessKeyId = process.env.REACT_APP_ACCESS_KEY_ID || "";
const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY || "";
const useFileUpload = () => {
    aws_sdk_1.default.config.update({ region, accessKeyId, secretAccessKey });
    const upload = (file, directory = "") => {
        const Key = directory ? `${directory}/${file.name}` : file.name;
        const manager = new aws_sdk_1.default.S3.ManagedUpload({
            params: {
                Bucket: albumBucketName,
                Key,
                Body: file,
                ACL: "public-read",
            },
        });
        return manager.promise();
    };
    return { upload };
};
exports.default = useFileUpload;
