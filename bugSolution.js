```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This runs only once after the component mounts
    console.log('Mounted!'); 
  }, []); // Empty dependency array means it runs only once

  return <div>Count: {count}</div>;
}
```