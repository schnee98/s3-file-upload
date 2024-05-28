import AWS from "aws-sdk";
declare const useFileUpload: () => {
    upload: (file: File, directory?: string) => Promise<AWS.S3.ManagedUpload.SendData>;
};
export default useFileUpload;
