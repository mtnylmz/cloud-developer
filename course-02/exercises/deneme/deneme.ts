import * as bcrypt from 'bcrypt';

const ptextpwd: string = 'sirCatFace';
const saltR = 10;
const salt = await bcrypt.genSalt(saltR);
const hash = await bcrypt.hash)ptextpwd,salt);

const compare = await bcrypt.compare(ptextpwd,hash);

