import styled, { keyframes } from 'styled-components';
import {
    bounceInDown,
    bounceInLeft,
    bounceInRight,    
    fadeIn,
    flash,
    flip,
    shake,
    slideInLeft,
    slideInRight,
    slideOutRight,
    wobble
} from 'react-animations';

//BounceInDown
const bounceInDownAnimation = keyframes`${bounceInDown}`;
export const BounceInDownDiv05 = styled.div`
animation: 0.5s ${bounceInDownAnimation};`;
export const BounceInDownDiv1 = styled.div`
animation: 1s ${bounceInDownAnimation};`;
export const BounceInDownDiv2 = styled.div`
animation: 2s ${bounceInDownAnimation};`;
export const BounceInDownDiv3 = styled.div`
animation: 3s ${bounceInDownAnimation};`;

//BounceInLeft
const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
export const BounceInLeftDiv05 = styled.div`
animation: 0.5s ${bounceInLeftAnimation};`;
export const BounceInLeftDiv1 = styled.div`
animation: 1s ${bounceInLeftAnimation};`;
export const BounceInLeftDiv2 = styled.div`
animation: 2s ${bounceInLeftAnimation};`;
export const BounceInLeftDiv3 = styled.div`
animation: 3s ${bounceInLeftAnimation};`;

// BounceInRight
const bounceInRightAnimation = keyframes`${bounceInRight}`;
export const BounceInRightDiv05 = styled.div`
animation: 0.5s ${bounceInRightAnimation};`;
export const BounceInRightDiv1 = styled.div`
animation: 1s ${bounceInRightAnimation};`;
export const BounceInRightDiv2 = styled.div`
animation: 2s ${bounceInRightAnimation};`;
export const BounceInRightDiv3 = styled.div`
animation: 3s ${bounceInRightAnimation};`;

//FadeIn
const fadeInAnimation = keyframes`${fadeIn}`;
export const FadeInDiv05 = styled.div`
animation: 0.5s ${fadeInAnimation};`;
export const FadeInDiv1 = styled.div`
animation: 1s ${fadeInAnimation};`;
export const FadeInDiv2 = styled.div`
animation: 2s ${fadeInAnimation};`;
export const FadeInDiv3 = styled.div`
animation: 3s ${fadeInAnimation};`;

//Flash
const flashAnimation = keyframes`${flash}`;
export const FlashDiv05 = styled.div`
animation: 0.5s ${flashAnimation};`;
export const FlashDiv1 = styled.div`
animation: 1s ${flashAnimation};`;
export const FlashDiv2 = styled.div`
animation: 2s ${flashAnimation};`;
export const FlashDiv3 = styled.div`
animation: 3s ${flashAnimation};`;

//Flip
const flipAnimation = keyframes`${flip}`;
export const FlipDiv05 = styled.div`
animation: 0.5s ${flipAnimation};`;
export const FlipDiv1 = styled.div`
animation: 1s ${flipAnimation};`;
export const FlipDiv2 = styled.div`
animation: 2s ${flipAnimation};`;
export const FlipDiv3 = styled.div`
animation: 3s ${flipAnimation};`;

//Shake
const shakeAnimation = keyframes`${shake}`;
export const ShakeDiv05 = styled.div`
animation: 0.5s ${shakeAnimation};`;
export const ShakeDiv1 = styled.div`
animation: 1s ${shakeAnimation};`;
export const ShakeDiv2 = styled.div`
animation: 2s ${shakeAnimation};`;
export const ShakeDiv3 = styled.div`
animation: 3s ${shakeAnimation};`;

//SlideInLeft
const slideInLeftAnimation = keyframes`${slideInLeft}`;
export const SlideInLeftDiv05 = styled.div`
animation: 0.5s ${slideInLeftAnimation};`;
export const SlideInLeftDiv1 = styled.div`
animation: 1s ${slideInLeftAnimation};`;
export const SlideInLeftDiv2 = styled.div`
animation: 2s ${slideInLeftAnimation};`;
export const SlideInLeftDiv3 = styled.div`
animation: 3s ${slideInLeftAnimation};`;

//SlideInRight
const slideInRightAnimation = keyframes`${slideInRight}`;
export const SlideInRightDiv05 = styled.div`
animation: 0.3s ${slideInRightAnimation};`;
export const SlideInRightDiv1 = styled.div`
animation: 1s ${slideInRightAnimation};`;
export const SlideInRightDiv2 = styled.div`
animation: 2s ${slideInRightAnimation};`;
export const SlideInRightDiv3 = styled.div`
animation: 3s ${slideInRightAnimation};`;

//SlideOutRight
const slideOutRightAnimation = keyframes`${slideOutRight}`;
export const SlideOutRightDiv05 = styled.div`
animation: 0.5s ${slideOutRightAnimation};`;
export const SlideOutRightDiv1 = styled.div`
animation: 1s ${slideOutRightAnimation};`;
export const SlideOutRightDiv2 = styled.div`
animation: 2s ${slideOutRightAnimation};`;
export const SlideOutRightDiv3 = styled.div`
animation: 3s ${slideOutRightAnimation};`;


//Wobble
const wobbleAnimation = keyframes`${wobble}`;
export const WobbleDiv05 = styled.div`
animation: 0.5s ${wobbleAnimation};`;
export const WobbleDiv1 = styled.div`
animation: 1s ${wobbleAnimation};`;
export const WobbleDiv2 = styled.div`
animation: 2s ${wobbleAnimation};`;
export const WobbleDiv3 = styled.div`
animation: 3s ${wobbleAnimation};`;