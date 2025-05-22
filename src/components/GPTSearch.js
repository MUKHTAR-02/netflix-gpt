import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { NETFLIX_BG } from '../utils/constants'

const GPTSearch = () => {
    return (
        <div>
            <div>
                <img src={NETFLIX_BG}
                    alt="Netflix bg img" className="fixed -z-10" />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch