import { createContext } from 'react';
import { treeService } from '../services/treeService';

const treeContext = createContext(treeService);

export { treeContext };