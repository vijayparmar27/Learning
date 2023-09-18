- docker run -d -p 5000:5000 --restart=always --name registry registry:2

- docker tag your-image-name:your-tag localhost:5000/your-image-name:your-tag

- docker push localhost:5000/your-image-name:your-tag
