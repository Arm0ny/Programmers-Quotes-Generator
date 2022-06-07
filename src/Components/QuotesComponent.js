import React from "react";
import LineIcon from "react-lineicons";
export class QuotesComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quote: 'Water is Wet...',
            author: 'totallyNotAPoet',
            twitLink : ''
        }
        this.getQuotes = this.getQuotes.bind(this);
    }

    getQuotes(){
        fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    quote: json.en,
                    author: json.author,
                    twitLink: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                        encodeURIComponent('"' + json.en + '" ' + json.author)
                });
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
                    <div id='quote_bottom'>
                        <p id='author'>{this.state.author}</p>
                        <a href={this.state.twitLink} id='tweet-quote' target='_top'>Tweet me! <LineIcon name="twitter-original"/></a>
                    </div>
                </div>
                <button id='get_button' onClick={this.getQuotes}>Get Quote</button>
            </article>


        )
    }

}



