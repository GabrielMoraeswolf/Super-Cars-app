import Post from '../types/Post';
import supraImage from '../../assets/image/supra.jpg';
import gtr from '../../assets/image/nissan-gtr-35.jpg';
import lfa from '../../assets/image/lexus-lfa.jpg';
import nsx from '../../assets/image/honda-NSX.jpg';
import mustang from '../../assets/image/mustang-gt.jpg';
import nissanZ from '../../assets/image/350z.jpg';
const posts: Post[] = [
    {id: 1,title:"Toyota Supra mk4",imageUrl: supraImage,body: "Toyota Supra mk4 image"},
    {id: 2,title:"Nissan Gtr",imageUrl: gtr,body: "Nissan Gtr-R35 image"},
    {id: 3,title:"Lexus LFA",imageUrl:lfa,body: "Lexus LFA image"},
    {id: 4,title:"Honda NSX",imageUrl:nsx,body: "Honda NSX image"},
    {id: 5,title:"Ford Mustang GT500",imageUrl:mustang,body: "Ford Mustang GT500 image"},
    {id: 6,title:"Nissan 350z",imageUrl:nissanZ,body: "Nissan 350z image"}
  ];
  export default posts;