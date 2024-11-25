# Logan Mee - Lilly Technical Challenge Documentation

## Approach
### Objective Order of Completion:
* Fetched & displayed data
* Ensured that the frontend handled missing/invalid data without crashing
* Made improvements to the overall design and user experience
* Created a user-friendly solution that allows users to input data on the site and send it to the backend

Completed in this order as I believed it would be quicker to create a functional frontend before attempting any backend development as it would make it easier to test.

Utilised a tutorials on:
* HTML Templates - To learn to use them for the first time to creating this project
* Async JavaScript functions - To recap my knowledge on how to best error handle fetch functions

## Objectives - Innovative Solutions

* Utilised HTML Templates to Efficiently create dynamic elements to display medicines 
* Utilised Inline-Block to dynamically order elements to window size
* Added Search functionality using unique API call to aid users in finding a specific medicine with helpful error messages

Rewrote much of the CSS file as there was lots of unneeded repetition, created shared classes to apply the same CSS in less lines.
Attempted addition of Deletion functionality multiple times due to problems with HTML templates. Continued in next section:

## Problems Faced
Had multiple problems due to not taking into account my Async JavaScript functions:
* Returned promise objects instead of waiting for a real Object to return
Watched a video and learnt how to properly utilise Asyncs with fetch requests.

Had to change the way I implemented the delete functionality due to problems with using templates to dynamically add buttons. Button assigned functions would not be called due to the buttons being generated dynamically. Tried adding dynamic delete buttons through JavaScript manually and tried to use EventListener to replace onclick, neither or which worked. Due to running out of time I reused the pre-existing form functionality from adding medicines and repurposed it for deletions.

## Evaluation
Felt the challenge went really well overall. 

It was my first time interfacing with an API using JavaScript as I usually use Python for most personal projects but I easily worked out how to interact with the API.

If I had more time I would have:
* Found a way to enable dynamic interactable buttons on each medicine element to enable quicker and more user friendly deletion/interaction.
* Enforced unique medicine names (By enforcing on input and give unique name to all Unknown Medicines)
* Added sorting functionality to sort by Price or Alphabetically