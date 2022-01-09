## Домашнее задание к занятию «2.6 База данных и хранение данных»

### Задание 2

#### Вставка:
```
db.books.insertMany([
  {
    title: '1984',
    description: 'some description',
    authors: ['George Orwell'],
  },
  {
    title: 'The Lord of the Rings',
    description: 'About book...',
    authors: ['John Ronald Reuel Tolkien'],
  },
])
```

#### Поиск:
```
db.books.find({ title: '1984' })
```

#### Обновление:
```
  db.books.updateOne(
    { _id: 1 },
    [
      {
        $set: { 
          description: 'changed description',
          authors: ['New Author'],
        },
       }
    ],
  )
```
