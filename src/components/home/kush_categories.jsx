import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import axios from "axios";
import { categorySlice } from "../../slices/category";
import { Link } from "react-router-dom";
import { leftDrawerSlice } from "../../slices/left_drawer";
const KushCategories = () => {

    const dispatch = useDispatch();
    const categoryActions = categorySlice.actions;
    const leftDrawerActions = leftDrawerSlice.actions;
    const categories = useSelector((state) => state.category.categories);

    useEffect(() => {
        // dispatch(productsActions.setIsLoading(true));
        axios.get(`${url}user/getAllCatagory`).then(
          (response) => {
            console.log(response)
            // dispatch(productsActions.setIsLoading(false));
            // dispatch(productsActions.setProducts(response.data.product));
    
            dispatch(categoryActions.setCategories(response.data.catagory));
          },
          (error) => {
            console.log(error);
          }
        );
      }, []);
   return <div className="kush-categories">
       <div className="header">
           All Categories
       </div>

       <div className="content">
      {categories && categories.map((category) => {
          return (
            <div className="category-item">
              {" "}
              <Link
              style={{color:'black',textDecoration:'none'}}
                to={`/categories/${category.catagory_Name.toLowerCase()}`}
             
              >
                {category.catagory_Name}
              </Link>
            </div>
          );
        })}
        
      </div>
        

    </div>

}
export default KushCategories;



