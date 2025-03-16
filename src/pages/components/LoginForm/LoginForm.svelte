<script lang="ts">
    import Column from 'src/components/Column/Column.svelte';
    import Title from 'src/components/Title/Title.svelte';
    import Label from 'src/components/Label/Label.svelte';
    import Email from 'src/components/Icon/Email.svelte';
    import Login from 'src/components/Icon/Login.svelte';
    import Password from 'src/components/Icon/Password.svelte';
    import VSpace from 'src/components/VSpace/VSpace.svelte';
    import Input from 'src/components/Input/Input.svelte';
    import Text from 'src/components/Text/Text.svelte';
    import Link from 'src/components/Link/Link.svelte';
    import Button from 'src/components/Button/Button.svelte';

    import Logo from 'src/pages/components/Logo/Logo.svelte';

    let email = $state('');
    let password = $state('');

    function sendRequest() {
		console.log('sendRequest');
	}
</script>

<style lang="less">
    @import "src/pages/components/LoginForm/login-form.less";
</style>

<Column xs="10" s="10" m="5" l="4" layout="center">
    <div class="login-form">
        <Logo />
        <Title typography="semibold" size="large">Photo Points</Title>
        <VSpace height="25" />
        <div class="login-form-body">
            <Label title="Адрес электронной почты" icon={Email} />
            <VSpace height="20" />
            <Input type="text" bind:value={email} placeholder="Введите адрес электронной почты" />
            <VSpace height="30" />
            <Label title="Пароль" icon={Password} />
            <VSpace height="20" />
            <Input type="password" bind:value={password} placeholder="Введите пароль учетной записи" />
            <VSpace height="30" />
            <div class="login-form-footer">
                <div>
                    <Text typography="regular" size="large">Нет учетной записи?</Text>
                    <div class="login-form-reg-link">
                        <Link href="/registration">Создайте ее!</Link>
                    </div>
                </div>
                <div class="login-form-action">
                    <Button onclick={sendRequest} icon={Login}>Войти</Button>
                </div>
            </div>
            <VSpace height="30" />
        </div>
    </div>
</Column>