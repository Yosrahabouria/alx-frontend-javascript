import uploadPhoto from utils.js;
import createUser from utils.js;

export default function handleProfileSignup(promise) {
    return Promise.all([uploadPhoto, createUser])
    .then((data) => {
        console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
      })
      .catch(() => console.log('Signup system offline'));
}