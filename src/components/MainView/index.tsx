import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
// import mockCategories from '../../mock/CategoriesMock.json';

const MainView = () => {
    const [categories, setCategories] = useState([]);

    // const categoriesObj = Object.keys(mockCategories)
    // console.log(categoriesObj)

    // useEffect(() => {
    //     if (categories.length == 0 && mockCategories) {
    //     //   mockCategories.map()
    //     }
    // }, [mockCategories])



    useEffect(() => {
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "products"));
          const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setCategories(items);
        };
        fetchData();
      }, []);

    //   console.log(categories)
  const listItems = categories.map((category) => <li key={category.id}>{JSON.stringify(category)}</li>);
  return (
    <>
      <div>MainView</div>
      <ul>{listItems}</ul>
      {/* <p>{categories}</p> */}
    </>
  );
};

export default MainView;
