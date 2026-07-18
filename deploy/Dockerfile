# Imagen del servicio de webhook: Python + git + docker CLI (habla con el
# socket del host para reconstruir el sitio).
FROM alpine:3.20
RUN apk add --no-cache python3 git docker-cli docker-cli-compose
WORKDIR /app
COPY webhook.py .
EXPOSE 9000
CMD ["python3", "webhook.py"]
