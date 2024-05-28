# @schnee/s3-file-upload

`@schnee/s3-file-upload` is a lightweight and easy-to-use npm package that simplifies the process of uploading files to Amazon S3 buckets from your React applications. Utilizing the AWS SDK for JavaScript/Typescript, it provides a convenient hook for uploading files with minimal setup required.

## Features

- Simple file uploads to Amazon S3
- Support for setting a custom directory within the bucket
- Configuration via environment variables
- Public read access for uploaded files

## Installation

Install `@schnee/s3-file-upload` using npm:

```bash
npm install @schnee/s3-file-upload
```

## Setup

Before using `@schnee/s3-file-upload`, configure the necessary environment variables in your React application:

- `REACT_APP_BUCKET_NAME`: Your Amazon S3 bucket name.
- `REACT_APP_REGION`: The AWS region your bucket is located in.
- `REACT_APP_ACCESS_KEY_ID`: Your AWS access key ID.
- `REACT_APP_SECRET_ACCESS_KEY`: Your AWS secret access key.

## Usage

Here is an short example to use `@schnee/s3-file-upload` in in your React application:

```javascript
import React from 'react';
import useFileUpload from '@schnee/s3-file-upload';

function App() {
  const { upload } = useFileUpload();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const response = await upload(file, 'myDirectory');
      console.log('File uploaded successfully:', response);
    } catch (error) {
      console.error('File upload failed:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default App;
```