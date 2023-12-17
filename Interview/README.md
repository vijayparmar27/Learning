- chatapp what typeof database use ?

  - Relational Database (SQL):

    - Example: PostgreSQL, MySQL, SQLite.
    - Use Cases:
      - If the data has a structured and well-defined schema.
      - When you need to perform complex queries or transactions on the data.
      - Suitable for scenarios where ACID (Atomicity, Consistency, Isolation, Durability) properties are critical, such as financial transactions.

  - Document-oriented Database (NoSQL):

    - Example: MongoDB.
    - Use Cases:
      - If the chat messages are stored in a semi-structured or nested format.
      - When flexibility in the data model is important, as chat messages may have different fields or structures.
      - Good for horizontal scaling and handling a large volume of read and write operations.

  - Key-Value Store (NoSQL):

    - Example: Redis.
    - Use Cases:
      - When quick access to specific messages or user-related data is crucial.
      - Useful for implementing features like real-time messaging, notifications, and presence tracking.
      - May be used for caching frequently accessed data.

  - Graph Database (NoSQL):z
    - Example: Neo4j.z
    - Use Cases:
      - If the chat application involves complex relationships, such as tracking interactions and connections between users.
      - Helpful for building features like social network analysis or recommendation systems within the chat context.
