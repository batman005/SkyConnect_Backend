# SkyConnect API: Flight Booking Simplified

The SkyConnect API is a powerful flight booking service that simplifies the integration of flight search, booking, and management functionalities into your applications. With the SkyConnect API, you can effortlessly connect travelers with a wide range of flights, enabling them to search for available flights, book reservations, and manage their itineraries with ease.
including flight management, booking systems, real-time notifications, and secure payment processing. It incorporates a Microservice MVC architecture, which guarantees both scalability and availability of the system.


# Non-Functional-Requirements
  - Conflict and Consistency Prevention: The application utilizes Transaction Isolation Level to maintain data integrity, ensuring that simultaneous seat bookings by different users are not allowed, thereby preventing conflicts and inconsistencies.

  - Payment Gateway Idempotency: The payment gateway incorporates Idempotency APIs to prevent unintended outcomes and accidental duplicate calls during the payment process, ensuring reliable and predictable behavior while avoiding any adverse effects.

# SKYCONNECT HLD

![HLD SKYCONNECT](https://github.com/batman005/SkyConnect_Backend/assets/51878340/16af3b68-518f-4457-b5ad-ee4eb6746498)

