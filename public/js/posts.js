async function getPosts(){
  return await fetch('https://travello-travel.herokuapp.com/posts')
        .then((res) => res.json())
        .then((data) => data);
}