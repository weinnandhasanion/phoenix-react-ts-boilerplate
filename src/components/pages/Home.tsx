import { useAppContext } from 'contexts';

export default function Home() {
  const { isLoggedIn, toggleLogin } = useAppContext();

  return (
    <div>
      <h1>Hello, world!</h1>

      <p>
        This is a base template for creating frontend applications. This is
        built with <strong>React</strong> and <strong>Typescript</strong>.
      </p>

      <p>
        App-level state is found in the <code>AppProvider</code>. Click on the
        button to toggle the <code>loggedIn</code> state!
      </p>

      <h4>
        <code>loggedIn: {isLoggedIn ? 'cap' : 'no cap'}</code>
      </h4>

      <button onClick={toggleLogin}>Toggle loggedIn state</button>

      <p>
        You are currently in the default route ("/") which renders the{' '}
        <code>Home</code> component. Create new pages in{' '}
        <code>src/components/pages</code> and add their routes in{' '}
        <code>src/constants/routes.ts</code> to start!
      </p>
    </div>
  );
}
