import { useState, useEffect } from 'react'
import GetComments from './GetComments'

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err))
  }, []);

  const mainDisplay = posts.map(post => (
    <GetComments post={post}/>
  ))

  return (
    <div>
      {mainDisplay}
    </div>
  )
}

export default App


























//   //declare posts variable, set default state to empty array
//   const [posts, setPosts] = useState([]);

//   //initial fetch call for all posts data from userId 7, can be any number/param here, i chose 7
//   //set dependecy to an empty array, hence only making the fetch call once up initial page load
//   useEffect(() => {
//     const url = 'https://jsonplaceholder.typicode.com/posts?userId=7';

//     fetch(url)
//       .then(res => res.json())
//       .then(data => setPosts(data))
//       .catch(err => console.log(err))
//   }, []);

//   //variable to store main render in App component, which holds ALL data, including comments and has clickability from GetComments component, pass post in as props to GetComments component
//   const mainDisplay = posts.map(post => (
//     <div>
//       <GetComments post={post} />
//     </div>
//   ));

//   return (
//     <div className="App">
//       {mainDisplay}
//     </div>
//   );