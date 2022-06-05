import React from "react";
export class QuotesComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quote: 'Water is Wet...',
            author: 'totallyNotAPoet'
        }
        this.getQuotes = this.getQuotes.bind(this);
    }

    getQuotes(){
        fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    quote: json.en,
                    author: json.author
                })
            });
    }

    render(){
        return (
            <article id='quotes_article'>
                <div id='quotes_div'>
                    <ul>
                        <li id='li1'></li>
                        <li id='li2'></li>
                        <li id='li3'></li>
                    </ul>
                    <p id='quote'>Computer-:Programming_quotes$    {this.state.quote}</p>
                    <p id='author'>{this.state.author}</p>
                </div>
                <button id='get_button' onClick={this.getQuotes}>Get Quote</button>
            </article>


        )
    }

}



