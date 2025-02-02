```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition for useEffect dependency
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count]); // This dependency array is correct

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```