// Es6中模块加载的方法，实质上是只加载需要的方法，并且是在编译时加载。
// 例如:
import{stat,readfile} from "fs";
// 只加载了stat和readfile模块