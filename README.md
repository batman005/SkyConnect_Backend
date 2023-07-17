# SkyConnect API: Flight Booking Simplified

The SkyConnect API is a powerful flight booking service that simplifies the integration of flight search, booking, and management functionalities into your applications. With the SkyConnect API, you can effortlessly connect travelers with a wide range of flights, enabling them to search for available flights, book reservations, and manage their itineraries with ease.
including flight management, booking systems, real-time notifications, and secure payment processing. It incorporates a Microservice MVC architecture, which guarantees both scalability and availability of the system.


# Non-Functional-Requirements
-     Transaction Isolation Level: The application must enforce a transaction isolation level that prevents conflicts and inconsistencies when multiple users attempt to book the same seat simultaneously.

-     Idempotency APIs for Payment Gateway: The payment gateway should incorporate idempotency APIs to prevent unintended consequences and accidental duplicate calls during the payment process.
