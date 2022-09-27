import AWS from 'aws-sdk';

const REGION = 'ap-northeast-1';
export const BUCKET = '';
const ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY_ID!;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY!;
const CREDENTIALS = {
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

AWS.config.update({ region: REGION, credentials: CREDENTIALS });
export const s3 = new AWS.S3();

export const getVideo = async (key: string) => {
  const params = {
    Bucket: BUCKET,
    Key: key,
  };

  try {
    return s3.getSignedUrl('getObject', params);
  } catch (error) {
    throw error;
  }
};
