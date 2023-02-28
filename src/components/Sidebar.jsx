import { Stack } from "@mui/system";
import { categories } from "../utils/constants";

const selectedCategory = "Coding";

const Sidebar = () => (

    <Stack 
        direction='row'
        sx={{
            overflowY:'auto',
            height:{sx:'auto', md:'95%'},
            flexDirection:{md:'column'}
        }}
    >
        {categories.map((category)=>(
            <button 
                className="category-btn"
                style={{
                    background: category.name === selectedCategory && 'cyan',
                    color:'white'
                
                }}
            >
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  
)

export default Sidebar