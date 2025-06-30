# docker-fullstack-app

A full-stack Dockerized web application with React frontend, Node.js backend, PostgreSQL database, and nginx reverse proxy. Easily run and scale with Docker Compose.

## 🚀 Tech Stack

- React (frontend)
- Node.js/Express (backend)
- PostgreSQL (database)
- nginx (reverse proxy)
- Docker & Docker Compose

## 📁 Project Structure
![{CEDF8C96-FBDB-4A85-A98A-513C686BC36C}](https://github.com/user-attachments/assets/b0396e27-b1ba-4b18-810c-5b3753f734f5)

## 🏁 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

### Run Locally

```bash
git clone https://github.com/your-username/docker-fullstack-app.git
cd docker-fullstack-app
docker-compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)
- Nginx (all-in-one): [http://localhost](http://localhost)

## 📚 API Endpoints

- `GET /api/users` — List users
- `POST /api/users` — Add a user

## ⚙️ Environment Variables

- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, etc. (see `docker-compose.yml`)

## 🐳 Useful Docker Commands

```bash
docker-compose up --build
docker-compose down
docker-compose logs
```
![{850E73A4-902E-4B94-A18E-C56767632494}](https://github.com/user-attachments/assets/b0999606-4af8-439b-b6e0-b53e64998d23)
![{0D9E178F-609C-46AA-96D2-563E1343BAE1}](https://github.com/user-attachments/assets/c6fb2edd-86b4-49be-9cd7-5e3b9af32103)
![{593FCE40-7E66-46CD-958B-8D9CF522FAA6}](https://github.com/user-attachments/assets/97dd16e0-ed79-43ae-8b35-4e1bb2e927af)





Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

Summary:
This project demonstrates a modern, production-style full-stack app using Docker.
You can easily run, scale, and extend it for your own learning or real-world use.
All code and configuration is now version-controlled and shareable via GitHub.

