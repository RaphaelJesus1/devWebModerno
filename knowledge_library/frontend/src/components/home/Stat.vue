<template>
    <div class="stat" :style="style">
        <div class="stat-icon">
            <i :class="icon"></i>
        </div>
        <div class="stat-info">
            <span class="stat-title">{{title}}</span>
            <span class="stat-value">{{value}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stat",
    props: ["title", "value", "icon", "colorPrimary", "colorSecondary"],
    computed: {
        style() {
            return "background: " + (this.colorSecondary
                ? "linear-gradient(to right, " + this.colorPrimary + ", "+ this.colorSecondary+")"
                : (this.colorPrimary || "#000"))
            // linear-gradient(to right, #dc143c, #a80e2d)
        }
    }
}
</script>

<style>
    .stat {
        flex: 1;
        display: flex;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        color: #fff;
        padding: 20px;
        border: 1px solid #fff9;
        box-shadow: 0 1px 5px #0003;
    }

    .stat-icon {
        display: flex;
        align-items: center;
    }

    .stat-icon i {
        font-size: 4.5rem;
    }

    .stat-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .stat-title {
        font-size: 1.2rem;
    }

    .stat-value {
        font-size: 3rem;
    }
</style>