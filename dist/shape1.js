"use strict";(self.webpackChunkp5=self.webpackChunkp5||[]).push([[156],{419:(n,t,e)=>{new(e(35))((function(n){var t,e=0,a=[];n.setup=function(){n.createCanvas(800,800),n.noFill(),n.background(255),n.strokeWeight(2),n.stroke(0,25),t=-n.width/2;for(var e=n.int(n.random(2,8));e>0;)a.push(n.int(n.random(3,10))),--e},n.draw=function(){if(!(t>n.width/2)){n.push(),n.translate(n.width/2,n.height/2);var r,i,o=n.random(a),s=n.TAU/o;n.beginShape();for(var h=0;h<=o;++h)r=n.cos(s*h)*t,i=n.sin(s*h)*t,n.vertex(r,i);n.endShape(),e+=n.int(n.random(-2,4)),t=e-n.width/2,n.pop()}}}))}},n=>{n.O(0,[216],(()=>(419,n(n.s=419)))),n.O()}]);