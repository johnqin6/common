/**
 * 验证特殊格式
 */

//验证手机号码是否正确
function isMobile(str) {
	var patrn = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if (!patrn.exec(str))
		return false;
	return true;
}

// 验证固定电话号是否正确
function isTel(str) {
  var patrn = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  if (patrn.exec(str))
    return false;
	return true;
}

// 验证身份证号
function isIDCard(str) {
  var patrn = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
  if (patrn.exec(str))
    return false;
	return true;
}

/**
 * 验证是否是汉字
 * @param {*} temp 
 */
function isChinese(temp){
  var re=/[^\u4e00-\u9fa5]/;
  if (re.test(temp)) return false ;
  return true ;
}

/**
 * 验证是否是邮箱
 * @param {*} str 
 */
function isEmail(str){
  var re=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  if (re.test(str) != true) {
    return false;
  }else{
    return true;
  }
}

/**
 * 验证是否存在列表中的危险字符
 * @param {*} chars 
 */
function isValidReg(chars){
  var re=/<|>|\[|\]|\{|\}|『|』|※|○|●|◎|§|△|▲|☆|★|◇|◆|□|▼|㊣|﹋|⊕|⊙|〒|ㄅ|ㄆ|ㄇ|ㄈ|ㄉ|ㄊ|ㄋ|ㄌ|ㄍ|ㄎ|ㄏ|ㄐ|ㄑ|ㄒ|ㄓ|ㄔ|ㄕ|ㄖ|ㄗ|ㄘ|ㄙ|ㄚ|ㄛ|ㄜ|ㄝ|ㄞ|ㄟ|ㄢ|ㄣ|ㄤ|ㄥ|ㄦ|ㄧ|ㄨ|ㄩ|■|▄|▆|\*|@|#|\^|\\/;
  if (re.test( chars) == true) {
    return false;
  }else{
    return true;
  }
}

/**
 * 验证是否是网址无论大小写
 * @param {*} chars 
 */
function isValidURL( chars ) {
  var re=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(\S+\.\S+)$/;
  if (!isNULL(chars)) {
    chars = jsTrim(chars);
    if (chars.match(re) == null)
      return false;
    else
      return true;
  }
  return false;
}

/**
 * 判断字符串是否为小数
 * @param {*} chars 
 */
function isValidDecimal( chars ) {
  var re=/^\d*\.?\d{1,2}$/;
  if (chars.match(re) == null)
    return false;
  else
    return true;
}

/**
 * 判断字符串是否为整数
 * @param {*} chars 
 */
function isNumber( chars ) {
  var re=/^\d*$/;
  if (chars.match(re) == null)
    return false;
  else
    return true;
}

/**
 * 判断字符串是否为浮点数
 * @param {*} str 
 */
function isFloat( str ) {
  for(i=0;i<str.length;i++)  {
     if ((str.charAt(i)<"0" || str.charAt(i)>"9")&& str.charAt(i) != '.'){
      return false;
     }
  }
  return true;
}

/**
 * 判断字符是否为A-Za-z英文字母
 * @param {*} str 
 */
function isLetters( str ){
  var re=/^[A-Za-z]+$/;
  if (str.match(re) == null)
    return false;
  else
    return true;
}

/**
 * 判断字符串是否邮政编码
 * @param {*} chars 
 */
function isValidPost( chars ) {
  var re=/^\d{6}$/;
  if (chars.match(re) == null)
    return false;
  else
    return true;
}
