```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will cause an infinite loop
    setCount(count + 1);
  }, [count]); // The dependency array includes 'count', creating a loop

  return <div>Count: {count}</div>;
}
```