---
layout: post
title: "The Mathematics of Imperfections"
date: 2026-08-02
description: Reflections on the Dirichlet Principle and Sobolev spaces.
tags: [math, philosophy]
categories: [mathematics]
featured: true
---

<div style="text-align: center;">

> *“Mathematics is the part of physics where experiments are cheap.”*  
> — V. I. Arnold

</div>

**The startle**

I knew he was one of the finest mathematicians of the community. I had
admired him from afar, but I had never really met him. When he is not
doing mathematics, you may just find him arguing in a political forum on
the internet or lurking in the comment section of some Messi fan's
Facebook post.

The day I first met him, he immediately handed me a task: verify the
statement $$\int |f_n|\,dx \to 0
\quad\Longrightarrow\quad
\left| \int f_n\,dx \right| \to 0.$$

On any ordinary day, it should have been a routine exercise for a
third-year undergraduate. Yet, as fate would have it, I found myself
questioning every elementary fact I had ever learned while sitting
across from a mathematical giant with perhaps the most intimidating aura
I had ever encountered.

Almost apologetically, I asked,

"Umm\... But it must be obviously true, right?\"

He let out a faint snort of derision. What he said next was enchanting.

"Mathematicians don't ask whether something is true before they know it
is true. That's what physicists and engineers do. We sit down with the
problem, prove the result with complete rigour, and only then do we say
that it is true - no matter how obvious it may have seemed at first
glance.\"

He paused for a moment before adding,

"A physicist sees water flowing smoothly from a tap and assumes that the
Navier-Stokes equations must therefore have smooth solutions. A
mathematician sees exactly the same thing, but would rather have a proof
on the page before assuming anything about the solutions. We don't like
spoilers.\"

# The question {#the-question .unnumbered}

I remember her asking me, "What could possibly be the smallest positive
number?"

Now, you see, I was more inclined towards physics and mathematics at
that point in time, while she was a devout enjoyer of ancient history.
Two people with interests on totally opposite sides of the spectrum.

She once came to me after learning the entire Brahmi alphabet and went
on to read an ancient Prakrit edict of Ashoka in front of me. I never
took much interest in history, particularly ancient history.

But this question of hers gave me a hiccup. I had never really thought
about it! I probably should have said that there isn't any "smallest
positive number", but that answer did not quite seem satisfactory to me
for some reason.

On the other hand, it would have been embarrassing if I couldn't answer
a simple mathematics question from her.

I liked her company. I liked the fact that she used to think I was the
most intelligent person in the class. Moreover, I liked the fact that I
was able to pinpoint something unique about her---she spoke of the rich
philosophical ideas hidden within myths in remarkably simple terms, even
as early as high school.

My love for mathematics stemmed from a similar sort of inclination: to
view it as the language of creation; to believe that it is how the Gods
speak among themselves. Most of our conversations turned out to be
surprisingly out of the ordinary.

Of course, anyone having completed one or two college courses in
mathematics would realize that we are trying to minimize the function
$f(x)=x$ on $\mathbb{R}^{+}$. While we can certainly obtain a minimizing
sequence, say $\left\{1,\frac12,\frac13,\dots,\frac1n,\dots\right\}$,
the minimizer (or the minimum) does not exist in $\mathbb{R}^{+}$. It
would, however, exist if the underlying set were $[0,\infty)$. In that
case, $0$ would be the minimizer of $f$.

<figure id="fig:minimizing-sequence">
  <img
    src="{{ '/assets/img/blog/mathematics-of-imperfections/minimizing-sequence.svg' | relative_url }}"
    alt="The sequence 1, 1/2, 1/3, 1/4, ... approaching 0"
    style="width: 80%; max-width: 700px;"
  >
  <figcaption>
    The sequence $\{1/n\}$ approaches $0$, but $0\notin\mathbb{R}^{+}$.
  </figcaption>
</figure>

Alas! I did not have the wit to generate such a complete answer back
then.

# The journey {#the-journey .unnumbered}

He wanted to tell me about the *Dirichlet Principle*. So, remember how,
in high school, to find the minimum or maximum point of a function, we
set its derivative to zero and solved the resulting equation?

The Dirichlet Principle is much the same, except that it deals with
objects more complicated than functions.

To see what he was getting at, consider the definition:

<div id="eq:dirichlet-energy">

$$
I(u) = \int_{\Omega} |\nabla u|^2\,dx.
$$

</div>

Let me explain what each term means.

$I$:

:   It is called a *functional*. A "function of functions", if you may.
    It takes a function as input and returns a number as output.

$u$:

:   The function on which $I$ acts.

$\Omega$:

:   An arbitrary *open* set. Let's say $(0,1)$. In that case, the
    integral would be $\int_0^1 \dots$.

$\nabla$:

:   Called the *gradient*. You may have seen this symbol in physics.
    It's exactly like taking the derivative of $u$, i.e.,
    $\dfrac{du}{dx}$ in one dimension.

Our job is to minimize the value of $I$. Now, it turns out that whatever
function $u$ minimizes $I$ must satisfy the equation

<div id="eq:laplacian">

$$
\Delta u = 0.
$$

</div>

where $\Delta$ (called the *Laplacian*) is nothing but $\nabla$ applied
twice. So,

$$\Delta \equiv \nabla^2 \equiv \nabla \cdot \nabla.$$

I won't go into the details of *why* this must be so. I will link an
explanation at the end of the article for anyone who is interested. For
now, I urge you to take my word for it. I simply want to tell you about
an interesting bit of history related to it.

Most of you may have heard of Bernhard Riemann. An outstanding
mathematician of the 19th century, he made countless contributions to
geometry, real and complex analysis, and even number theory!

You see, he once found himself working with something called *harmonic
functions*. These are the functions that satisfy the equation we just
talked about: $\Delta u = 0.$

Now, why is this interesting, you may ask? Well, for starters, almost
every bit of calculus is either directly or indirectly inspired by
something *physical*. This was no exception.

Take an electric potential function, say $u(x)$, for example. We know
that the electric field $E$ is given by $$E(x) = -\nabla u(x).$$

You must remember that it was during the mid-19th century that a great
deal of work was being done on electromagnetism. Maxwell famously
formulated his four equations of electromagnetism, one of which states
that, in a charge-free region, $$\nabla \cdot E = 0.$$

Now, combining this with our previous equation, we obtain
$$\nabla^2 u(x) = 0
\qquad
\text{or}
\qquad
\Delta u = 0.$$

Therefore, it was only natural for Riemann to investigate and
characterize such equations from a mathematical standpoint. He began
looking for solutions of [Eq. (2)](#eq:laplacian) in the set of all continuously differentiable
functions. We mathematicians call this the space $C^1$, where the "$C$"
stands for "continuous" and the superscript "1" indicates that the
function is once differentiable.

It must be noted that Riemann was not "consciously" searching for
solutions in $C^1$. For him, the choice was as natural as it gets---the
assumption that a physical potential would be continuous and
differentiable was taken for granted. So, he stuck with it.

What he did next had only been hinted at by a few other mathematicians
before him.[^1]

We briefly discussed a few paragraphs ago what it was about. Just to
recall, any function that minimizes [Eq. (1)](#eq:dirichlet-energy) must necessarily satisfy
[Eq. (2)](#eq:laplacian). This is very reminiscent of finding the
critical points of a function in one dimension.

You can think of $\Delta$ as being the "derivative" of $I$. Whenever
$I(u)$ is minimized, we necessarily have $$\Delta u = 0.$$

All seemed well. Riemann therefore turned his focus to finding
minimizers of [Eq. (1)](#eq:dirichlet-energy). Again, assuming that the minimizer
would be continuous and differentiable was only instinctive. Of course,
as is often the case in mathematics, when you forget to pay attention to
the most obvious assumptions, it backfires. Such a thing happened to
Riemann as well, believe it or not!

Riemann ended up making the very same mistake that I did: assuming
something obvious without any precise justification.

Karl Weierstrass was a contemporary of Riemann. Introducing him merely
as such would be doing a grave injustice to his own astronomical
contributions to mathematics. Considered the father of modern analysis,
many of the results that we learn today in foundational courses on
analysis can be attributed to him. The *Weierstrass Approximation
Theorem* still remains a favourite among mathematicians today.

Weierstrass looked at Riemann's work and questioned what seemed the most
obvious to everyone else. Almost like he did to me when I first met him!

Why should the minimizer of [Eq. (1)](#eq:dirichlet-energy) lie in $C^1$ in the first place? What
basis do we have for assuming that?

Let's take an example to understand what he meant. Among all
continuously differentiable paths that go from $A$ to $B$ while passing
through $C$, we wish to determine the path of smallest length.

Clearly, you cannot have anything shorter than the broken line
$AC + CB$. A *minimizing sequence of paths* will surely exist, but the
minimizer in the space of all continuously differentiable paths would
not!

<figure id="fig:weierstrass">
  <img
    src="{{ '/assets/img/blog/mathematics-of-imperfections/weierstrass.svg' | relative_url }}"
    alt="Different paths joining A to B through C"
  >
  <figcaption>
    Straight and continuous paths joining A to B through C.
  </figcaption>
</figure>

There is no smallest positive number!

Riemann then spent the rest of his life trying to answer Weierstrass'
critique of the Dirichlet Principle, but to no avail. Mathematicians
around him grew increasingly skeptical of his methods and ideas,
although many of them continued to believe, deep down, that Riemann was
right, and that the minimizer was indeed continuous!

One of these mathematicians was Weierstrass himself, for he had advised
one of his students to look into the theory and find a proof for the
existence of the minimizer. The name of the student was H. A.
Schwarz.[^2]

It would be fair to say that Riemann's journey with the *Dirichlet
Principle* ended here. One important question still remained, however:
how did the physicists react to all this?

They took quite the opposite stance. Completely rejecting Weierstrass'
critique, the famous physicist Helmholtz remarked,

"For us physicists, the Dirichlet Principle remains a proof."

Felix Klein, in his book *Development of Mathematics in the 19th
Century*, writes,

"\...it is a general fact that physicists are little troubled by the
fine points of mathematics---for them the 'evidence' is sufficient."

History records a rather amusing twist in the tale afterwards.

[^3]

In the 1930s, the Russian mathematician Sergei Sobolev developed a
complete framework to prove that a minimizing sequence does, in fact,
converge to a minimizer in a special kind of function space---Sobolev
spaces!

What were these spaces? You might imagine that the mathematics is
incredibly complex, but it really is not!

Forget about physics for a second. We needed the assumption of
continuity because physical objects are generally assumed to be
continuous---well, sort of! But to assign a sufficiently generous space
to the function $u$ in [Eq. (1)](#eq:dirichlet-energy), all we really need is that the square
of its derivative be integrable, i.e., that it gives us a finite number
when integrated.

The space Sobolev chose for [Eq. (1)](#eq:dirichlet-energy) is called $W^{1,2}$. Here, the "2"
represents square integrability, and the "1" represents the first
derivative that is being integrated. So, essentially, $W^{1,2}$ is the
set of all functions whose first derivative is square integrable. And
that makes perfect sense if we look at the definition of the functional
again:

$$I(u)=\int_{\Omega}\left|\frac{du}{dx}\right|^2\,dx.$$

We are simply taking the square of the first derivative of $u$ and
integrating it. That is all.

But hold on a moment! If we are talking about derivatives, aren't we
already assuming that the function is continuous? To put it mildly, if
$u$ is differentiable, then $u$ had better be continuous.

And there lies the catch! The "$W$" in $W^{1,2}$ stands for "weak". The
derivatives in question here are not classical derivatives; instead,
they are called *weak derivatives*. A function can be horribly
discontinuous and still be weakly differentiable. Weak derivatives do
not really care what happens at one or two isolated points. If we can
somehow capture how the function changes almost everywhere else, then we
are in good shape.[^4] Take an example of the function:

$$f(x) = |x|$$

<figure id="fig:absolute-value">
  <img
    src="{{ '/assets/img/blog/mathematics-of-imperfections/absolute-value.svg' | relative_url }}"
    alt="Graph of f(x) = |x|"
  >
  <figcaption>
    The function \(f(x)=|x|\).
  </figcaption>
</figure>

By the original idea of the derivatives we could not really
differentiate the function at $0$. Which would have hindered our attempt
to integrate something like $\int_{-1}^{1}  \dfrac{df}{dx}  dx$.

In a case like this, weak derivatives comes to our rescue. We can just
define

$$\dfrac{df}{dx} = 
\begin{cases}
-1, & x<0,\\
1, & x > 0.
\end{cases}$$

<figure id="fig:weakderivative">
  <img
    src="{{ '/assets/img/blog/mathematics-of-imperfections/weak-derivative.svg' | relative_url }}"
    alt="Graph of the weak derivative of the absolute-value function"
  >
  <figcaption>
    A representative graph of the weak derivative of \(f(x)=|x|\).
  </figcaption>
</figure>

and that would be a perfectly valid weak derivative of $f$, even though
we have not defined its value at $0$ at all! We also would need to
liberalize the notion of integrals to work with

$$\int_{-1}^{1}  \dfrac{df}{dx}  dx,$$

but that is not really the hard part, and to assure you such integrals
are generally studied in a 3rd or 4th year undergraduate course in
Measure Theory.

So, there you have it. Modern-day mathematicians have successfully
tackled this 200-year-old question with the help of measure theory and
Sobolev space theory. $C^1$ functions were never good enough! We always
needed a space of functions that goes beyond continuity and
differentiability to search for minimizers of [Eq. (1)](#eq:dirichlet-energy) that would ultimately satisfy

$$\Delta u = 0.$$

What did it take? Nothing more than Weierstrass questioning the obvious
and Sobolev (along with a few others!) thinking outside the box. Sobolev
spaces were mathematics refusing to accept a spoiler from intuition.

# In retrospect {#in-retrospect .unnumbered}

Reality was never perfect in the first place. Our universe was never
fine-tuned for continuity. Some of the most beautiful things in
existence emerge precisely because equilibrium is broken. What we have
just discovered may well be a glimpse of reality quietly strolling away
from the obvious, creating something wonderfully unexpected.

Perhaps that is why physics continues to turn to mathematics whenever
its intuitions are put to the test. Sometimes, reason must conquer
evidence. Sometimes, you have to trust a calculation more than you trust
your own eyes.

I have not heard from her in ages. I do not know where she is, how she
is, what she is doing, or even whether she is happy.

I only know that I made the terrible mistake of trying to make her fit
into my own idea of perfection. The flaw was never in her, it was
perhaps in the space in which I insisted on searching for her. It was
not smooth all the time, but then again, neither is life, love, and
ecstasy.

::: center

------------------------------------------------------------------------
:::

[^1]: Notably, Gauss in 1840 and W. Thomson in 1847. Dirichlet, a few
    years later, came up with the idea and passed it on to Riemann, who
    then named it the *Dirichlet Principle* after the person he had
    learned it from.

[^2]: If you are an undergraduate in mathematics, buckle up---you might
    be hearing this name almost every day throughout your career.

[^3]: Long after Riemann's death, in the early 1900s, David Hilbert and
    Beppo Levi showed that a minimizer could indeed exist in suitably
    enlarged spaces of functions.

[^4]: There are, of course, many intricate details hidden behind this
    statement, and strictly speaking, it is not entirely correct.
    Nevertheless, it provides a useful intuition for what weak
    derivatives are trying to accomplish.
