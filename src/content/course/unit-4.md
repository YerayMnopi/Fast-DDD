---
title: "DDD Patterns"
---

### Active record
- Active record objects are coupled to an object-relational mapping (ORM) or some other data access framework.

### Repository
- Separates an application’s business logic from data storage and retrieval.

### Value object
- A value object is an object that can be identified by the composition of its values.
- Value objects shine brightest when they centralize the business logic that manipulates the values.
- You don't need an identifier.
- A useful rule of thumb is to use value objects for the domain’s elements that describe properties of other objects
```
class Color {
    red: number;
    green: number;
    blue: number;
}
```

### Entity
- An entity is the opposite of a value object. It requires an explicit identification field to distinguish between the different instances of the entity.
- Different people can be namesakes and can have exactly the same names. That, of course, doesn’t make them the same person.

### Agreggate
- An aggregate is an entity: it requires an explicit identification field and its state is expected to change during an instance’s lifecycle. However, it is much more than just an entity. 
- The goal of the pattern is to protect the consistency of its data. Since an aggregate’s data is mutable
- The aggregate pattern draws a clear boundary between the aggregate and its outer scope: the aggregate is a consistency enforcement boundary. The aggregate’s logic has to validate all incoming modifications and ensure that the changes do not contradict its business rules.
- An aggregate’s public interface is responsible for validating the input and enforcing all of the relevant business rules and invariants. This strict boundary also ensures that all business logic related to the aggregate is implemented in one place: the aggregate itself.
- The rule of thumb is to keep the aggregates as small as possible and include only objects that are required to be in a strongly consistent state by the aggregate’s business logic.
- To decide whether an entity belongs to an aggregate or not, examine whether the aggregate contains business logic that can lead to an invalid system state if it will work on eventually consistent data.

### Factory
Factory is an object that produces complicated aggregates or sometimes also entities and value objects.

### Domain Service
A stateless object that hosts business logic that naturally doesn’t belong to any of the domain model’s aggregates or value objects. E.G. Match maker


### Domain Event
A domain event is a message describing a significant event that has occurred in the business domain.


---
[**Back to unit 3**](/Fast-DDD/course/unit-3)
