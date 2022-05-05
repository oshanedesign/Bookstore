import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/BOOK_REMOVED';

export const moreBooks = (title, author) => ({
  type: ADD_BOOK, payload: { title, author, id: uuidv4() },
});

export const lessBooks = (id) => ({
  type: REMOVE_BOOK, payload: id,
});

const defaultState = [{
  title: 'Dummy Book1',
  author: 'Oshane 1',
  id: uuidv4(),
},
{
  title: 'Dummy Book2',
  author: 'Oshane 2',
  id: uuidv4(),
}];

const bookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.payload,
    ];

    case REMOVE_BOOK: return [
      ...state.filter((book) => (book.id !== action.payload)),
    ];
    default:
      return state;
  }
};

export default bookReducer;