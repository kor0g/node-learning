type Data<T = {}> = {
  status: number,
  error?: string,
  data?: T,
}

type Book = {
  id: string,
  title: string,
  author: string,
  description?: string,
}

const testBook = {
  id: '123',
  title: 'Some title',
  author: 'Some Author',
}

class BooksRepository {
  createBook(): Data {
    return { status: 200 }
  }

  getBook(id: string): Data<Book> {
    return { status: 200, data: testBook }
  }

  getBooks(): Data<Book[]> {
    return { status: 200, data: [testBook] }
  }

  updateBook(book: Book): Data {
    return { status: 200 }
  }

  deleteBook(id: string): Data {
    return { status: 200 }
  }
}
