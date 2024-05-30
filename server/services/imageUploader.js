const AWS = require('aws-sdk');

const PRODUCT_S3_BUCKET_NAME = process.env.PRODUCT_S3_BUCKET_NAME;
const REGION = process.env.REGION;

module.exports.uploadImageToS3 = async (base64Data, contentType) => {
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: REGION,
  });

  const filename = `${Date.now()}.${contentType.split('/')[1]}`;

  const params = {
    Bucket: PRODUCT_S3_BUCKET_NAME,
    Key: filename,
    Body: Buffer.from(base64Data, 'base64'),
    ContentType: contentType,
    ACL: 'public-read',
  };

  try {
    const uploaded = await s3.putObject(params).promise();
    console.log('Image uploaded successfully', uploaded);

    const imageUrl = `https://${PRODUCT_S3_BUCKET_NAME}.s3.${REGION}.amazonaws.com/${filename}`;
    return imageUrl;
  } catch (error) {
    console.error('Error uploading image to S3', error);
    throw new Error('Error uploading image to S3');
  }
};
