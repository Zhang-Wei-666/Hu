import { observe } from "../../observable/util/observe";
import observeReadonly from "../../../shared/const/observeReadonly";


export default function initOptions( root, options, target, targetProxy, userOptions ){
  target.$options = observe( userOptions, observeReadonly );
}