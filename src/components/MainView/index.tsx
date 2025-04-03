import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const MainView = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "products"));
          const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setCategories(items);
        };
        fetchData();
      }, []);


  const listItems = categories.map((category) => <li key={category.id}>{JSON.stringify(category)}</li>);
  return (
    <>
      <div>MainView</div>
      <ul>{listItems}</ul>
    </>
  );
};

export default MainView;
