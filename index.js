#! /usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import open from "open";


program
    .version('0.0.1')
    .description('A simple CLI for learning purposes')
    .action(()=>{
        console.log(
            gradient('blue','cyan', 'violet','pink')(figlet.textSync(`Hello,\n I'm Jaimin Godhani.👋`, { horizontalLayout: "standard" }))
            );
        console.log(gradient('violet','cyan', 'green', 'gold', 'orange', 'pink')(`I am a Computer Science student at Rajiv Gandhi Institute of Petroleum Technology.\nMy passion lies in Machine Learning and Web Development, and during my spare time,\nI actively participate in open-source projects.\n\n`));
        console.log(chalk.white(`To see list of commands, type ${chalk.green("'jaimin --help'")}\n`));
    });

program
    .command('github')
    .description('Open my GitHub profile')
    .action(async()=>{
        console.log(chalk.green('Opening GitHub profile...'));
        await open('https://github.com/Jai0401');
    })

program
    .command('linkedin')
    .description('Open my LinkedIn profile')
    .action(async()=>{
        console.log(chalk.green('Opening LinkedIn profile...'));
        await open('https://www.linkedin.com/in/jaimin-godhani-6b524b151/');
    })

program
    .command('resume')
    .description('Open my resume')
    .action(async()=>{
        console.log(chalk.green('Opening resume...'));
        await open('https://www.jaimingodhani.me/static/JaiminGodhani_CV-672c20a5e45be75ec9138b025c8c3cf3.pdf');
    })

program
    .command('website')
    .description('Open my personal website')
    .action(async()=>{
        console.log(chalk.green('Opening personal website...'));
        await open('https://www.jaimingodhani.me/');
    })

program.parse(process.argv);