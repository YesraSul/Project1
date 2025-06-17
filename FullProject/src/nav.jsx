import { Link } from "react-router-dom"
import "./navstyle.css"
const Nav=()=>
{
    return (
        <>
        <nav id ='nav-wrapper'>
            <ul id ='nav'>
    <li> <Link to ="/"id='Link'className="active"   >    المواد </Link> 
    </li>
    <li> <Link to ="/project"id='Link'   >    المشاريع</Link>  </li>
    <li><Link to ="/specialization"id='Link'   >    الاختصاص</Link> </li>
    <li><Link to ="/library"id='Link'   >    المكتبة</Link> </li>
    <li><Link to ="/community"id='Link'   >    المجتمعات</Link> </li>
    <li> <Link to ="/aboutus"id='Link'   >    لمحة عنا</Link> </li>
    <li><Link to ="/howuse"id='Link'   >    كيف تستخدم موقعنا</Link></li>


    <li><Link to ="/student-library"id='Link'   >    المكتبة</Link> </li>
    <li><Link to ="/student-community"id='Link'   >    المجتمع</Link> </li>

    
    </ul>
        </nav>
        
        
        
        </>



    )



}
export default Nav