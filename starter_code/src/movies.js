// ||======================|| //
// ||                      || //
// ||   MAPPERS EXERCISE   || //
// ||         JSC          || //
// ||                      || //
// ||======================|| //



// Packages



// Methods
const movieAverage = ( movies, decimals ) => {

    let average = movies.reduce( ( acc, curr ) => 
        {curr = curr ? curr : 0
        return acc + curr}, 0 )

    average = (average ? average / movies.length : 0)

    return Math.round(average*10**decimals)/(10**decimals)

}



    //////////////
   //          //
  //   CODE   //
 //          //
//////////////



// Order by year
const orderByYear = ( movies ) => {    
    const sorted_array = movies.sort( ( movie_1, movie_2 ) => {
        if (movie_1.year !== movie_2.year) return movie_1.year - movie_2.year
        else {
            if ( movie_1.title > movie_2.title ) return 1
            if ( movie_2.title > movie_1.title ) return -1
            else return 0
        }
    } )
    return sorted_array    
}

// --------------------------------------------------------------------------------



// How many movies?
const howManyMovies = ( movies ) => {

    const filtered_movies = movies.filter( movie => {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    } )
    return filtered_movies.length}

// --------------------------------------------------------------------------------



//Order alphabetically
const orderAlphabetically = ( movies ) => {

    const max_titles = 20 // Max number of shown titles in output array
    const titles = movies.map( movie => movie.title )
    const last_element = Math.min(titles.length, max_titles)

    const title_alpha = titles.sort( ( title_1, title_2 ) => {
        if ( title_1 > title_2 ) return 1
        if ( title_2 > title_1 ) return -1
        else return 0
    })

    const titles_slice = title_alpha.slice(0, last_element)

    return titles_slice
}

// --------------------------------------------------------------------------------



// Rate average
const ratesAverage = ( movies ) => {

    const rate_array = movies.map( movie => movie.rate )

    const average = movieAverage( rate_array, 2 )

    return average
}

// --------------------------------------------------------------------------------



// Drama movie rate
const dramaMoviesRate = ( movies ) => {

    const drama_movies = movies
                            .filter( movie => movie.genre.includes("Drama") )
                            .map( movie => movie.rate )
    // const rate_array = drama_movies.map( movie => movie.rate )

    let average = movieAverage( drama_movies, 2 )

    return average
}

// --------------------------------------------------------------------------------



// Best year average
const bestYearAvg = ( movies ) => {
console.log(movies.length)
    if ( movies.length > 0 ){
        console.log(5555555555555555555555)
        const years_array_multiple = movies.map( movie => movie.year )
        const years_array = Array.from(new Set (years_array_multiple)) // Clean multiple years

        // Object with average for every year
        const averageByYear = years_array.map( year => {        
            const moviesByYear = movies.filter( movie => movie.year === year )
            const rate_array = moviesByYear.map( movie => movie.rate )    
            return { year: year,
                    average: movieAverage( rate_array, 2 ) }

        } )

        // Obtain year/s with max rate
        const max_rate = Math.max(...averageByYear.map( rate => rate.average ))
        const max_object = averageByYear.filter( rate => rate.average === max_rate )
        const max_years_array = max_object.map( element => element.year)
        const min_year = Math.min(...max_years_array)
        const best_object = max_object.filter( element => element.year === min_year )


        console.log(max_object)
        return `The best year was ${best_object[0].year} with an average rate of ${best_object[0].average}`
    }
    else return null
    


        
    
}

var newMoviesArr = [
    { year: 2000, rate: 9 },
    { year: 2000, rate: 8 },
    { year: 1978, rate: 10 },
    { year: 1978, rate: 7 }
  ];
console.log(bestYearAvg(newMoviesArr))


