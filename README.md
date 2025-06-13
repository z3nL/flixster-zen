## Unit Assignment: Flixster

Submitted by: **Zen Lambertus**

Estimated time spent: **30** hours spent in total

Deployed Application (**required**): [Flixster Deployed Site](https://flixster-zen.onrender.com/)

### Application Features

#### REQUIRED FEATURES

- [ X ] **Display Movies**
  - [ X ] Users can view a list of current movies from The Movie Database API in a grid view.
    - [ X ] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [ X ] For each movie displayed, users can see the movie's:
    - [ X ] Title
    - [ X ] Poster image
    - [ X ] Vote average
  - [ X ] Users can load more current movies by clicking a button which adds more movies to the grid without reloading the entire page. 
- [ X ] **Search Functionality**
  - [ X ] Users can use a search bar to search for movies by title.
  - [ X ] The search bar should include:
    - [ X ] Text input field
    - [ X ] Submit/Search button
    - [ X ] Clear button
  - [ X ] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [ X ] Presses the Enter key
    - [ X ] Clicks the Submit/Search button
  - [ X ] Users can click the Clear button. When clicked:
    - [ X ] Most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [ X ] **Design Features**
  - [ X ] Website implements all of the following accessibility features:
    - [ X ] Semantic HTML
    - [ X ] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [ X ] Alt text for images 
  - [ X ] Website implements responsive web design.
    - [ X ] Uses CSS Flexbox or CSS Grid
    - [ X ] Movie tiles and images shrink/grow in response to window size
  - [ X ] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [ X ] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [ X ] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [ X ] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [ X ] The pop-up displays additional details about the moving including:
      - [ X ] Runtime in minutes
      - [ X ] Backdrop poster
      - [ X ] Release date
      - [ X ] Genres
      - [ X ] An overview
  - [ X ] Users can use a drop-down menu to sort movies.
    - [ X ] Drop-down allows movies to be sorted by:
      - [ X ] Title (alphabetic, A-Z)
      - [ X ] Release date (chronologically, most recent to oldest)
      - [ X ] Vote average (descending, highest to lowest)
    - [ X ] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [ X ] Website displays:
    - [ X ] Header section
    - [ X ] Banner section
    - [ X ] Search bar
    - [ X ] Movie grid
    - [ X ] Footer section
    - [ X ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 
  - [ X ] **Deployment**
  - [ X ] Website is deployed via Render.
  - [ X ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 

#### STRETCH FEATURES


- [ X ] **Embedded Movie Trailers**
  - [ X ] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    - [ X ] When the trailer is clicked, users can play the movie trailer.
- [ X ] **Favorite Button**
  - [ X ] For each movie displayed, users can favorite the movie.
  - [ X ] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [ X ] If the movie is not favorited:
    - [ X ] Clicking on the visual element should mark the movie as favorited
    - [ X ] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [ X ] If the movie is already favorited:
    - [ X ] Clicking on the visual element should mark the movie as *not* favorited.
    - [ X ] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited. 
- [ X ] **Watched Checkbox**
  - [ X ] For each movie displayed, users can mark the movie as watched.
  - [ X ] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [ X ] If the movie has not been watched:
    - [ X ] Clicking on the visual element should mark the movie as watched
    - [ X ] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [ X ] If the movie is already watched:
    - [ X ] Clicking on the visual element should mark the movie as *not* watched.
    - [ X ] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [ X ] **Sidebar**
  - [ X ] The website includes a side navigation bar.
  - [ X ] The sidebar has three pages:
    - [ X ] Home
    - [ X ] Favorites
    - [ X ] Watched
  - [ X ] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [ X ] The Favorites page displays all favorited movies in a grid view.
  - [ X ] The Watched page displays all watched movies in a grid view.

### Walkthrough Video

`<div style="position: relative; padding-bottom: 64.55089820359281%; height: 0;"><iframe src="https://www.loom.com/embed/7bd9fabdd8914bf6baddf621f05c4a45?sid=15d1ff93-a092-4bae-b6f5-408b8ba6ad96" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The weather report lab was an amazing resource to get practice with useState and Effects, and it really
helped me bring home the concept of lifting states and how to best implement them. I felt completely unprepared to leverage these concepts beforehand and my finished product is heavily reliant on state drilling and lifting them.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, one thing I would've done differently is give a bit more attention to the site design. I actually like how it turned out, but it feels a little bland compared to what I could have achieved now that React facilitated easier under-the-hood work. I also would have omitted the navigation bar at the top when saved content is on display, since nothing within it would actually do anything in that moment.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

One thing that went really well in my project demo was demonstrating the full scope of my sorting feature. You can load more content the same way you would on now playing, except this new content adapts to the current sort filter, which I was super proud of. One thing that didn't go as planned was loading more data to the point that there would be incoming duplicates from the TMDB API, which resulted in undefined behavior, but my peers advised me on how to circumnavigate this erroneous behavior in the future.

### Open-source libraries used

N/A

### Shout out
Shoutout to Noah, Bob, Terrence, Jesus, Michelle, Paige, Paloma, Dijon, Pedro, and Carlos; thank you all for letting me come to you with issues that had the simplest solutions in retrospect