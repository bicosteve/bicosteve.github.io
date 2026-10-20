# Bico Steve — Backend Engineer

**I build reliable, event-driven backend systems where transaction correctness matters.** My focus is **Java / Spring Boot** and **Python**.

**Stack:** Java 21 · Spring Boot · Python · FastAPI · Flask · Kafka · RabbitMQ · MySQL · Redis · Docker

## How I approach backend systems

I design for failure and correctness early: explicit message delivery behavior, clear service boundaries, and tests around business rules. In my sportsbook pipeline, Rapid Engine publishes odds and event updates, Event Consumer evaluates moneyline, handicap, and totals markets, and API Gateway handles betting and wallet workflows.

The messaging services support RabbitMQ or Kafka selected at runtime with `MESSAGING_BROKER`. Rapid Engine uses broker acknowledgements before advancing its event cursor; failed batches retain the previous cursor, so consumers must account for at-least-once delivery. Event settlement follows deterministic rules, and the service repository reports a 220+ test suite covering evaluators and settlement behavior.

**Sportsbook stack:** Java 21 · Spring Boot · Kafka / RabbitMQ · MySQL · Redis · Docker

## Selected projects

- **Sportsbook Platform** — Three Java services for odds/event ingestion, result settlement, and betting/wallet APIs. Rapid Engine and Event Consumer can select Kafka or RabbitMQ with `MESSAGING_BROKER`. [Live platform](https://sportbook.bixx.co.ke/) · [Demo](https://youtu.be/46A08UC7L4M) · [API docs](https://api.bixx.co.ke/api-gateway/swagger-ui/index.html#/)
  - Source: [Rapid Engine](https://github.com/bicosteve/rapid_engine) · [Event Consumer](https://github.com/bicosteve/event-consumer) · [API Gateway](https://github.com/bicosteve/api-gateway)
- **Job Board API** — Python/Flask hiring platform with candidate and admin workflows, server-sent event streams, Redis-backed rate limiting, and a React/TypeScript frontend. [Source](https://github.com/bicosteve/job-board-api) · [Live app](https://bixx.co.ke/)
- **Google Search** — FastAPI app for Google organic search through SerpAPI, with a web interface, JSON API, and search history. [Source](https://github.com/bicosteve/inizio-media) · [Live app](https://api.bixx.co.ke/gsearch/)

## Other projects

- **[Booking System](https://github.com/bicosteve/booking-system)** — Go hotel reservation service with role-based access, Stripe payments, and asynchronous messaging through Kafka or RabbitMQ.
- **[Calory Tracker](https://github.com/bicosteve/callory-tracker)** — Go service for nutritional tracking with authentication and a relational data layer.

## Contact

[Portfolio](https://bicosteve.github.io/) · [GitHub](https://github.com/bicosteve) · [LinkedIn](https://www.linkedin.com/in/bico-steve/) · [Email](mailto:bicosteve4@gmail.com)
