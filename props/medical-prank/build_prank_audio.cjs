const fs=require('fs'),path=require('path');const rate=22050,seconds=8,n=rate*seconds;
const samples=new Float32Array(n);let phase=0;
for(let i=0;i<n;i++){
 const t=i/rate,u=t%2;
 const env=u<.65?Math.pow(Math.sin(Math.PI*u/.65),2):u>1&&u<1.32?Math.pow(Math.sin(Math.PI*(u-1)/.32),2):0;
 const f=u<.65?360-200*u/.65:500-180*(u-1)/.32;
 phase+=2*Math.PI*f/rate;
 // Cartoon duck / kazoo, with gentle underlying propeller putter.
 samples[i]=env*(.36*Math.sin(phase)+.19*Math.sin(phase*2)+.08*Math.sin(phase*3))+.035*Math.sin(2*Math.PI*32*t)*(.5+.5*Math.sin(2*Math.PI*8*t));
}
const b=Buffer.alloc(44+2*n);b.write('RIFF');b.writeUInt32LE(b.length-8,4);b.write('WAVEfmt ',8);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(1,22);b.writeUInt32LE(rate,24);b.writeUInt32LE(rate*2,28);b.writeUInt16LE(2,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(n*2,40);
for(let i=0;i<n;i++)b.writeInt16LE(Math.round(samples[i]*26000),44+2*i);
const out=path.join(__dirname,'props','medical-prank');fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(out,'rotor-wash.wav'),b);console.log({seconds,peak:Math.max(...samples.slice(0,rate)),bytes:b.length});
