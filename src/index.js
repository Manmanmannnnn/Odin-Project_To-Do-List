import './styles.css'
import { createHome } from "./initialPage";
import { createMenu } from './menuPage';
import { creaateContact } from './contact';
import { headStyle,button1Function,button2Function,button3Function } from './heading';


createHome();
headStyle();


button1Function(createHome);
button2Function(createMenu);
button3Function(creaateContact);


