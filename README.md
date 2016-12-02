# website
My Personal Website

## Build instructions

The following commands should be typed into the terminal or command line

* Step 1: Clone the repository ``` git clone https://github.com/agoddijn/website.git ``` into a directory on your computer

* Step 2: Go into the directory and run ``` npm install ```

* Step 3: Install mongodb ``` brew install mongodb ``` (need to have homebrew installed) and start the database using ``` mongod ```
* Step 4: Run ``` nodemon server.js ```

* Step 5: go to http://localhost:3000/ in your browser

## Data Structures

* Job:
  name: Name of the job
  logo: Image file of logo
  positions: Array of positions (sections)
    name: Name of position
    descriptionAbove: First part of description above carousel
    descriptionBelow: Second part of description below carousel
    additional: Array of additional content for carousel
      type: one of 'code', 'image', 'video'
      content: url of image or video, or code
      caption: Caption associated with content

* Project:
  title: Name of the project
  icon: Image file of icon
  descriptionShort: Short description for the tile
  video: url of video link for tile
  github: url of code on github for tile
  sections: Array of sections
    header: Section header
    descriptionAbove: First part of description above carousel
    descriptionBelow: Second part of description below carousel
    additional: Array of additional content for carousel
      type: one of 'code', 'image', 'video'
      content: url of image or video, or code
      caption: Caption associated with content

* Blog:
  id: Unique identifier (not currently implemented)
  title: Title of blog
  image: Banner image for blog
  heightDesktop: Max height of blog in desktop mode
  heightMobile: Max height of blog in mobil mode
  date: Date of blog yyyy/mm/dd
  content: html content of blog
