import React from 'react'

const Quotes = ({quotes, deleteQuote}) => {
  return(
    <div className="quote-list">
      {
        quotes.map(quote =>{
          return(
            <div className="quote" key={quote.id}>
              <h2>{ quote.title }</h2>
              <div className="quoteText">Quote: "{ quote.quote }"</div>
              <div className="byText">By: { quote.author }</div>
              <button onClick={()=>{deleteQuote(quote.id)}}>Delete quote</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Quotes