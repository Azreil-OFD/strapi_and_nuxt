# template_strapi_and_nuxt

Шаблон проекта на Strapi + Nuxt + PrimeVue.

## Описание

Этот проект представляет собой шаблон, объединяющий Strapi, Nuxt и PrimeVue. Он предназначен для быстрого старта разработки современных веб-приложений с использованием этих технологий.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <URL_репозитория>
   cd template_strapi_and_nuxt
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Настройте переменные окружения:
   - Создайте файлы `.env.strapi.dev` и `.env.strapi.prod` в корневой папке на основе `.env.strapi.example`.
    ```bash
    cp .env.strapi.example .env.strapi.dev && cp .env.strapi.example .env.strapi.prod
    ```
## Скрипты

### Разработка

- Запуск проекта в режиме разработки:
  ```bash
  npm run dev
  ```

### Сборка

- Сборка фронтенда:
  ```bash
  npm run build:frontend
  ```

- Сборка бэкенда:
  ```bash
  npm run build:backend
  ```

- Полная сборка (фронтенд + бэкенд):
  ```bash
  npm run build
  ```

### Запуск

- Запуск фронтенда:
  ```bash
  npm run start:frontend
  ```

- Запуск бэкенда:
  ```bash
  npm run start:backend
  ```

- Полный запуск (фронтенд + бэкенд):
  ```bash
  npm run start
  ```

### Генерация

- Генерация статических файлов:
  ```bash
  npm run generate
  ```

- Предварительный просмотр сгенерированных файлов:
  ```bash
  npm run preview
  ```

### Деплой

- Скрипт для деплоя:
  ```bash
  npm run deploy
  ```

## Зависимости

### Основные зависимости

- `nuxt`: ^3.14.1592
- `vue`: latest
- `@strapi/plugin-cloud`: 5.4.2
- `@strapi/plugin-users-permissions`: 5.4.2
- `@strapi/strapi`: 5.4.2
- `better-sqlite3`: 11.3.0
- `concurrently`: ^8.2.2

### Dev зависимости

- `@types/node`: ^20
- `@types/react`: ^18
- `typescript`: ^5

## Поддерживаемые версии

- Node.js: >=18.0.0 <=22.x.x
- npm: >=6.0.0

## Лицензия

Этот проект лицензирован под MIT.

## Разработчик
- [Azreil-OFD](https://github.com/Azreil-OFD)